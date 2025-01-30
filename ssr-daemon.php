<?php
set_time_limit(0); // Pastikan skrip berjalan tanpa batas waktu
ignore_user_abort(true); // Biarkan berjalan meskipun user menutup browser

$logFile = __DIR__ . '/ssr-daemon.log';

function logMessage($message)
{
  global $logFile;
  file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] " . $message . PHP_EOL, FILE_APPEND);
}

// Jalankan loop untuk menjaga proses tetap berjalan
while (true) {
  logMessage("Memulai SSR server...");

  // Jalankan SSR menggunakan exec atau shell_exec
  $process = popen('php artisan inertia:start-ssr 2>&1', 'r');

  if (!$process) {
    logMessage("Gagal menjalankan SSR server.");
  } else {
    while (!feof($process)) {
      $line = fgets($process);
      logMessage($line);
    }
    pclose($process);
    logMessage("SSR server berhenti. Restart dalam 5 detik...");
  }

  // Tunggu 5 detik sebelum mencoba restart
  sleep(5);
}
