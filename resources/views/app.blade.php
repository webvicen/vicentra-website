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
</body>

</html>