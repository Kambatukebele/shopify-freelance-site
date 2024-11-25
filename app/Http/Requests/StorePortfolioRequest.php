<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePortfolioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "company_name" => "required|string",
            "company_niche" => "required|string",
            "company_live_url" => "required|url:https",
            "company_about" => "required|string",
            "company_image" => "required|image|mimes:jpg,png",
            "company_review" => "string|nullable",
            "company_representative_name" => "string|nullable",
            "company_representative_title" => "string|nullable",
        ];
    }
}
