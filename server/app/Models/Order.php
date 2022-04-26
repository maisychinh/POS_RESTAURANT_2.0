<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';

    protected $guarded = [];
    protected $primaryKey = 'order_id';
    protected $casts = [
        'items' => 'array'
    ];
    public $timestamps = true;

    public function setItemsAttribute($value)
	{
	    $items = [];

	    foreach ($value as $array_item) {
	        if (!is_null($array_item['item'])) {
	            $items[] = $array_item;
	        }
	    }

	    $this->attributes['items'] = json_encode($items);
	}
}
