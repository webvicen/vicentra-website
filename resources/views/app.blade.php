<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @viteReactRefresh
  @vite(['resources/css/app.css', 'resources/js/app.js'])
  @inertiaHead
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
  @inertia

  <script defer>
    setTimeout(() => {
      document.querySelectorAll('.sales_cta_link').forEach(function(el){
        el.addEventListener('click', function(e){
          gtag('event', 'button_click', {
            'event_category': 'user_interaction',
            'event_label': `click button sales ${el.dataset['sales']}`
          });
        });
      });
    }, 1000);
  </script>
</body>

</html>