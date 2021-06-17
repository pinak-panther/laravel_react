<?php


namespace App\Repository;

use App\Models\Product;
class ProductRepository
{
    /**
     * @return Product[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getAll(){
        return Product::all();
    }

    /**
     * @param $id
     * @return Prodcut|\Illuminate\Database\Eloquent\Model
     */
    public function find($id)
    {
        return Product::findOrFail($id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        $user = $this->find($id);
        $user->delete();
        return $id;
    }

    /**
     * @param $inputs
     * @return Product|\Illuminate\Database\Eloquent\Model
     */
    public function store($inputs)
    {
        return Product::create([
            'name'=>$inputs['name'],
            'description'=>$inputs['description'],
            'price'=>$inputs['price'],
            'category'=>$inputs['category']
        ]);
    }

    /**
     * @param $inputs
     * @param $id
     * @return bool
     */
    public function edit($inputs,$id)
    {
        $product = $this->find($id);
        return $product->update([
            'name'=>$inputs['name'],
            'description'=>$inputs['description'],
            'price'=>$inputs['price'],
            'category'=>$inputs['category']
        ]);
    }
}
