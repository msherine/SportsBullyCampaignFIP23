<?php

/** @var \Laravel\Lumen\Routing\Router $router */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');
Route::options('/{any:.*}', [function (){ 
   return response(['status' => 'success']); 
  }
 ]
);



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
//localhost:8000 
$router->get('/', function () use ($router) {
    //return $router->app->version();
    return view('index');
});

$router->get('/blog', function () use ($router) {
    //return $router->app->version();
    return view('blog');
});

$router->get('/article', function () use ($router) {
    //return $router->app->version();
    return view('article');
});
//localhost:8000/books/1
$router->get('comments', ['uses' => 'CommentController@getAllComments']);

$router->get('comments/{id}', ['uses' => 'CommentController@getOneComment']);

$router->post('comments', ['uses' => 'CommentController@createComment']);

//update
$router->put('comments/{id}', ['uses' => 'CommentController@updateComment']);

//delete
$router->delete('comments/{id}', ['uses' => 'CommentController@deleteComment']);

//Article
$router->get('articles', ['uses' => 'ArticleController@getAllArticles']);

$router->get('articles/{id}', ['uses' => 'ArticleController@getOneArticle']);

$router->post('articles', ['uses' => 'ArticleController@createArticle']);

//update
$router->post('articles/{id}', ['uses' => 'ArticleController@updateArticle']);

//delete
$router->delete('articles/{id}', ['uses' => 'ArticleController@deleteArticle']);

