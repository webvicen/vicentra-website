<!DOCTYPE html>
<html lang="id">

<head>
  <!-- Metas -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta name="author" content="Vicentra Dev" />
  @viteReactRefresh
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  @inertiaHead
  <!-- Google Tag Manager -->
  <script>
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KS8JSKPD');
  </script>
  <!-- End Google Tag Manager -->
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-380WK6XCHD"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-380WK6XCHD');
  </script>
</head>

<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KS8JSKPD" height="0" width="0"
      style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  @inertia

  <script defer>
    setTimeout(() => {
      document.querySelectorAll('.sales_cta_link').forEach(function(el){
        el.addEventListener('click', function(e){
          gtag('event', `click_link_sales_${el.dataset['sales'].toLowerCase().replace(/\s+/g, '_')}`, {
            'event_category': 'user_interaction',
            'event_label': `click button sales ${el.dataset['sales'].toLowerCase()}`
          });
          console.log(`click_link_sales_${el.dataset['sales'].toLowerCase().replace(/\s+/g, '_')}`);
        });
      });
    }, 1000);
  </script>
</body>

</html>