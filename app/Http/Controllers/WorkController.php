<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWorkRequest;
use App\Http\Requests\UpdateWorkRequest;
use App\Models\Work;

class WorkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Work/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Work/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWorkRequest $request)
    {
        // Handle and store images
        return dd($request->file('large_image'));
        $featuredImagePath = $request->file('featured_image')->store('assets/images/featured', 'public');
        $largeImagePath = $request->file('large_image')->store('assets/images/large', 'public');
        $mediumImagePath = $request->file('medium_image')->store('assets/images/medium', 'public');
        $smallImagePath = $request->file('small_image')->store('assets/images/small', 'public');

        // Save the validated data along with image paths to the database
        $data = [
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'project_url' => $request->input('project_url'),
            'featured_image' => $featuredImagePath,
            'large_image' => $largeImagePath,
            'medium_image' => $mediumImagePath,
            'small_image' => $smallImagePath,
            'completion_date' => $request->input('completion_date'),
            'tags' => $request->input('tags'),
        ];

        // Example: Save to a 'projects' table (adjust as needed)
        Work::create($data);
        return redirect()->route("work.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Work $work)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Work $work)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWorkRequest $request, Work $work)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Work $work)
    {
        //
    }
}
