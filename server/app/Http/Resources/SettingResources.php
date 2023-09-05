<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     @return array<string, mixed>
     *
     */
    public function toArray(Request $request): array
    {
        return [
            'name'=>$this->name,
            'description'=>$this->description,
            'logo'=>$this->logo,
            'favicon'=>$this->favicon,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'address'=>$this->address,
            'facebook'=>$this->facebook,
            'X'=>$this->X,
            'instagram'=>$this->instagram,
            'linkedin'=>$this->linkedin
        ];
    }
}
