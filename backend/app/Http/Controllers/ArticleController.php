<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Article;



class ArticleController extends Controller
{
    public function getAllArticles() {
        //Book::all();
        return response()->json(Article::all());
    }

    public function getOneArticle($id) {
        return response()->json(Article::all()->find($id));
    }

    public function createArticle(Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'article_desc'=> 'required',
            'article_img' => 'required',
            'img_big' => 'required',
            'text' => 'required'
        ]);
        $article = new Article();

        if($request->hasFile('article_img')){
            $file = $request->file('article_img');
            $allowedfileExtension = ['png', 'jpg'];
            $extension = $file->getClientOriginalExtension();
            $check = in_array($extension, $allowedfileExtension);

            if($check) {
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $article->article_img = $name;
            }
        }

        if($request->hasFile('img_big')){
            $file = $request->file('img_big');
            $allowedfileExtension = ['png', 'jpg'];
            $extension = $file->getClientOriginalExtension();
            $check = in_array($extension, $allowedfileExtension);

            if($check) {
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $article->img_big = $name;
            }
        }

        $article->title = $request->input('title');
        $article->article_desc = $request->input('article_desc');
        $article->text = $request->input('text');

        $article->save();
 
        return redirect('http://localhost:4500/');
    }

    public function updateArticle(Request $request, $id) {

        $this->validate($request, [
            'title' => 'required',
            'article_desc'=> 'required',
            'article_img' => 'required',
            'img_big' => 'required',
            'text' => 'required'
        ]);

        $article = Article::find($id);

        if($request->hasFile('article_img')){
            $file = $request->file('article_img');
            $allowedfileExtension = ['png', 'jpg'];
            $extension = $file->getClientOriginalExtension();
            $check = in_array($extension, $allowedfileExtension);

            if($check) {
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $article->article_img = $name;
            }
        }

        if($request->hasFile('img_big')){
            $file = $request->file('img_big');
            $allowedfileExtension = ['png', 'jpg'];
            $extension = $file->getClientOriginalExtension();
            $check = in_array($extension, $allowedfileExtension);

            if($check) {
                $name = time() . $file->getClientOriginalName();
                $file->move('images', $name);
                $article->img_big = $name;
            }
        }

        $article->title = $request->input('title');
        $article->article_desc = $request->input('article_desc');
        $article->text = $request->input('text');

        $article->save();
        return redirect('http://localhost:4500/');
        
    }

    public function deletearticle($id) {
        $article = Article::findOrFail($id)->delete();
        return response()->json('deleted', 200);
        return redirect('http://localhost:4500/');
    }
}
