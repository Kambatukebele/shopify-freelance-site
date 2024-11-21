<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePorfolioRequest;
use App\Http\Requests\UpdatePorfolioRequest;
use App\Models\Porfolio;

class PorfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Portfolio/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Portfolio/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePorfolioRequest $request)
    {
        // $featuredImagePath = $request->file('company_image')->store('/assets/images/portfolios', 'public');
        // $featuredImagePath = $request->file('company_image');
        return dd($request->file('company_image'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Porfolio $porfolio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Porfolio $porfolio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePorfolioRequest $request, Porfolio $porfolio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Porfolio $porfolio)
    {
        //
    }
}
