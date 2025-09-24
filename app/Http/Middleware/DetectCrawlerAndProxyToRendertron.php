<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class DetectCrawlerAndProxyToRendertron
{
    protected $rendertronUrl = 'http://localhost:3000/render/';

    protected $blacklistExtensions = [
        'js', 'css', 'xml', 'less', 'png', 'jpg', 'jpeg', 'svg', 'gif', 'pdf',
        'doc', 'txt', 'ico', 'rss', 'zip', 'mp3', 'rar', 'exe', 'wmv', 'avi',
        'ppt', 'mpg', 'mpeg', 'tif', 'wav', 'mov', 'psd', 'ai', 'xls', 'mp4',
        'm4a', 'swf', 'dat', 'dmg', 'iso', 'flv', 'm4v', 'torrent', 'eot',
        'ttf', 'otf', 'woff', 'woff2'
    ];

    protected $bots = [
        'googlebot',
        'yahoo',
        'bingbot',
        'yandex',
        'baiduspider',
        'facebookexternalhit',
        'twitterbot',
        'rogerbot',
        'linkedinbot',
        'embedly',
        'bufferbot',
        'quora link preview',
        'showyoubot',
        'outbrain',
        'pinterest',
        'pinterest/0.',
        'developers.google.com/+/web/snippet',
        'www.google.com/webmasters/tools/richsnippets',
        'slackbot',
        'vkshare',
        'w3c_validator',
        'redditbot',
        'applebot',
        'whatsapp',
        'flipboard',
        'tumblr',
        'bitlybot',
        'skypeuripreview',
        'nuzzel',
        'discordbot',
        'google page speed',
        'qwantify',
    ];

    public function handle(Request $request, Closure $next)
    {
        $userAgent = strtolower($request->header('User-Agent', ''));

        Log::info('DetectCrawlerAndProxyToRendertron Middleware triggered for UA: ' . $userAgent);

        // Cek ekstensi blacklist, lewati kalau ada
        $path = $request->path();
        $extension = strtolower(pathinfo($path, PATHINFO_EXTENSION));
        if ($extension && in_array($extension, $this->blacklistExtensions)) {
            Log::info("Request has blacklisted extension '$extension', skipping Rendertron.");
            return $next($request);
        }

        // Cek apakah User-Agent termasuk bot yang dideteksi
        foreach ($this->bots as $bot) {
            if (strpos($userAgent, $bot) !== false) {
                Log::info("Bot detected: '$bot' in UA. Proxying request to Rendertron.");

                $urlToRender = $request->fullUrl();
                $renderUrl = $this->rendertronUrl . $urlToRender;

                try {
                    $response = Http::get($renderUrl);

                    Log::info('Rendertron response status: ' . $response->status());

                    if ($response->ok()) {
                        Log::info('Returning prerendered content from Rendertron.');
                        return response($response->body(), 200)
                            ->header('Content-Type', 'text/html');
                    } else {
                        Log::warning('Rendertron returned non-OK status: ' . $response->status());
                    }
                } catch (\Exception $e) {
                    Log::error('Rendertron error: ' . $e->getMessage());
                }

                // Jika Rendertron gagal, break dan teruskan request normal
                break;
            }
        }

        // Bukan bot atau gagal proxy ke Rendertron, lanjutkan request normal
        return $next($request);
    }
}
