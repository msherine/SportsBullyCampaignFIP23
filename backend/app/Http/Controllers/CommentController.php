<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;



class CommentController extends Controller
{
    public function getAllComments() {
        //Book::all();
        return response()->json(Comment::join('articles', 'article_id', '=', 'articles.id')->select('user', 'content', 'title', 'article_desc')->get());
    }

    public function getOneComment($id) {
        return response()->json(Comment::join('articles', 'article_id', '=', 'articles.id')->select('user', 'content', 'title', 'article_desc')->find($id));
    }

    public function createComment(Request $request) {
        $this->validate($request, [
            'user' => 'required',
            'content'=> 'required',
            'article_id' => 'required|integer'
        ]);
        $comment = Comment::create($request->all());
        return redirect('http://localhost:3500/blog');
    }

    public function updateComment(Request $request, $id) {
        $comment = Comment::findOrFail($id);
        $comment->update($request->all());
        return response()->json($comment, 200);
    }

    public function deleteComment($id) {
        $comment = Comment::findOrFail($id)->delete();
        return response()->json('deleted', 200);
    }


}
