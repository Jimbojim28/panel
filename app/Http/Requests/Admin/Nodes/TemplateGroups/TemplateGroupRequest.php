<?php

namespace Convoy\Http\Requests\Admin\Nodes\TemplateGroups;

use Convoy\Models\TemplateGroup;
use Illuminate\Foundation\Http\FormRequest;

class TemplateGroupRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules = TemplateGroup::getRules();

        return [
            'name' => $rules['name'],
            'hidden' => $rules['hidden'],
        ];
    }
}
