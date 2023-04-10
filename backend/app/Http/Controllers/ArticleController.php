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
            'article_img' => 'required'
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

        $article->title = $request->input('title');
        $article->article_desc = $request->input('article_desc');

        $article->save();
 
        return redirect('http://localhost:3500/blog');
    }

    public function updateArticle(Request $request, $id) {
        $article = Article::findOrFail($id);
        $article->update($request->all());
        return response()->json($article, 200);
    }

    public function deletearticle($id) {
        $article = Article::findOrFail($id)->delete();
        return response()->json('deleted', 200);
    }
}
