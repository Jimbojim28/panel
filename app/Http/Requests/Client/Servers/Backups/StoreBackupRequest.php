<?php

namespace Convoy\Http\Requests\Client\Servers\Backups;

use Convoy\Models\Backup;
use Illuminate\Foundation\Http\FormRequest;

class StoreBackupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $rules = Backup::getRules();

        return [
            'name' => $rules['name'],
            'locked' => $rules['locked'],
            'mode' => 'required|in:snapshot,suspend,stop',
            'compressionType' => 'required|in:none,lzo,gzip,zstd',
        ];
    }
}
