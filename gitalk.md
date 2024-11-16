
    <style>
        .canvas-container {
            display: flex;
            flex-direction: column;
            align-items: center;
         }
         canvas {
             border: 1px solid black;
             background-color: #333;
            margin-bottom: 20px;
         }
        #gitalk-container {
            width: 600px;
        }
    </style>

 <body>

    <div class="canvas-container">
        <canvas id="complexLineCanvas" width="600" height="600"></canvas>
        <div id="gitalk-container"></div>
    </div>



<!-- Gitalk link  -->
<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk@latest/dist/gitalk.min.js"></script>
<!-- Include md5 library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.min.js"></script>

<div id="gitalk-container"></div>
    <script type="text/javascript">
    var gitalk = new Gitalk({
    clientID: 'Ov23lixOB0KjXtg08eAj',
    clientSecret: 'a3a33cad9733049a39849d54e99e69f70f69d1c1',
    repo: 'tthtlc.github.io',
    owner: 'tthtlc',
    admin: ['tthtlc'],
    distractionFreeMode: true,
    id: md5(location.pathname),
    });
    gitalk.render('gitalk-container');
</script>

<!-- Gitalk end -->
