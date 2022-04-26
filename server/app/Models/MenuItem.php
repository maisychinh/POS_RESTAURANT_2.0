<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    use HasFactory;

    protected $table = 'menu_items';
    protected $guarded = [];
    protected $primaryKey = 'item_id';
    protected $casts = [
        'extras' => 'array'
    ];
    public $timestamps = true;

    public function setItemsAttribute($value)
	{
	    $extras = [];

	    foreach ($value as $array_item) {
	        if (!is_null($array_item['item'])) {
	            $extras[] = $array_item;
	        }
	    }

	    $this->attributes['extras'] = json_encode($extras);
	}
}
