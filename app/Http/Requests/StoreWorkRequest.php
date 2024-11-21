<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWorkRequest extends FormRequest
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
            // 'title' => "required|string",
            // 'description' => "required",
            // "project_url" => "required|url:https",
            // "featured_image" => "required",
            // "large_image" => "required",
            // "medium_image" => "required",
            // "small_image" => "required",
            // "completion_date" => "required|date",
            // "tags" => "required|string"
        ];
    }
}
