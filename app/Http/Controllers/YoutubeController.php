<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreYoutubeRequest;
use App\Http\Requests\UpdateYoutubeRequest;
use App\Models\Youtube;

class YoutubeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $youtubes = Youtube::orderBy('created_at', 'desc')->paginate(10);
        return inertia('Youtube/Index', ['youtubes' => $youtubes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Youtube/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreYoutubeRequest $request)
    {
        $youtube = new Youtube;
        $youtube->video_url = $request->video_url;
        $youtube->save();

        return redirect()->route('youtube.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Youtube $youtube)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Youtube $youtube)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateYoutubeRequest $request, Youtube $youtube)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Youtube $youtube)
    {
        //
    }
}
