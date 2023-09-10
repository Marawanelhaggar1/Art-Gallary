<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description'=>$this->description,
            'discount'=>$this->discount,
            'price' => $this->price,
            'stock' => $this->stock,
            'image' => $this->image,
            'status'=>$this->status,
            // 'category_id'=>new CategoryResource($this->whenLoaded('categories')),
            // 'artist_id'=>new ArtistsResource($this->whenLoaded('artists')),
            'category_id'=>$this->category_id,
            'artist_id'=>$this->artist_id,
        ];
    }
}
