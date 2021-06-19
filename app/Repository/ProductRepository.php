<?php


namespace App\Repository;

use App\Models\Product;
class ProductRepository
{
    /**
     * @param $input
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getAll($input){
        $sort = ['id','DESC']; //default
        $sortField = $sort[0];
        $sortDirection = $sort[1] == 'desc'?'DESC':'ASC';
        $perPage = $input['perPage'] ?? 10;
        return Product::orderBy($sortField,$sortDirection)->paginate($perPage);
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
