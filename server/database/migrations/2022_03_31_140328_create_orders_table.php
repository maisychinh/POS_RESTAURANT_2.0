<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('order_id');
            $table->integer('user_id')->unsigned()->nullable();
            $table->string('user_name')->nullable();
            $table->json('items');
            $table->integer('total');
            $table->enum('payment_method', ['cash', 'card', 'e_wallet'])->nullable();
            $table->enum('status', ['waitting', 'cancelled', 'approved', 'paid', 'cooking', 'completed']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
