<?php

    $request = (string)explode('?', $_SERVER['REQUEST_URI'])[0];
    $arg = explode('/', $request);
    // $request_array = array("/", "/combined_bathroom", "/new_building");
    // if(!in_array($request, $request_array)){
    //     header("HTTP/1.0 404 Not Found");
    // }
    // include(dirname(__FILE__).'/includes/main.php');

    if( $arg[1] == ''){
        include(dirname(__FILE__).'/pages/homepage.php');
    } else {
        if( file_exists(dirname(__FILE__).'/pages/'.$arg[1].'.php') ) {
            include(dirname(__FILE__).'/pages/'.$arg[1].'.php');
        } else {
            //php return 404 status
            // var_dump(http_response_code(404));
            // include(http_response_code(404));
            // http_response_code(404);
            header("HTTP/1.0 404 Not Found");
            include(dirname(__FILE__).'/pages/error404.php');
        }
    }
?>