<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Http\Requests\StorePortfolioRequest;
use App\Http\Requests\UpdatePortfolioRequest;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolios = Portfolio::orderBy('created_at', 'desc')->paginate(10);
        $portfolioAll = $portfolios->getCollection()->transform(function ($portfolio){
            return [
                'id' => $portfolio->id,
                'company_name' => $portfolio->company_name,
                'company_image' => asset('storage/' . $portfolio->company_image)
            ];
        });
        return inertia('Portfolio/Index', ['portfolios' => $portfolioAll]);
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
    public function store(StorePortfolioRequest $request)
    {
        //Capture the image
        $file = $request->file('company_image');
        if ($file) {
            $company_imagePath = $file->store('assets/images/portfolios', 'public');
        }

         // Save the validated data along with image paths to the database
        $data = [
            'company_name' => $request->input('company_name'),
            'company_niche' => $request->input('company_niche'),
            'company_live_url' => $request->input('company_live_url'),
            'company_about' => $request->input('company_about'),
            'company_review' => $request->input('company_review'),
            'company_representative_name)' => $request->input('company_representative_name)'),
            'company_representative_title' => $request->input('company_representative_title'),
            'company_image' => $company_imagePath,
        ];

        Portfolio::create($data);
        return redirect()->route("portfolio.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(Portfolio $porfolio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Portfolio $portfolio)
    {
        $portfolio =  [
            'id' => $portfolio->id,
            'company_name' => $portfolio->company_name,
            'company_image' => asset('storage/' . $portfolio->company_image),
            'company_niche' => $portfolio->company_niche,
            'company_live_url' => $portfolio->company_live_url,
            'company_about' => $portfolio->company_about,
            'company_review' => $portfolio->company_review,
            'company_representative_name' => $portfolio->company_representative_name,
            'company_representative_title' => $portfolio->company_representative_title,
        ];
        return inertia("Portfolio/Edit", ["portfolio" => $portfolio]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePortfolioRequest $request, Portfolio $portfolio)
    {
        if ($request->hasFile('company_image')) {
            if ($portfolio->company_image) {
                \Illuminate\Support\Facades\Storage::disk('public')->delete($portfolio->company_image);
            }

            $filePath = $request->file('company_image')->store('assets/images/portfolios', 'public');
            $portfolio->company_image = $filePath;
        }

        $portfolio->update($request->except(['company_image']));

        return redirect()->route("portfolio.index")->with('success', 'Portfolio updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portfolio $porfolio)
    {
        //
    }
}
