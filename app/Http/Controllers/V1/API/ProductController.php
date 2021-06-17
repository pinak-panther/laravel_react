<?php

namespace App\Http\Controllers\V1\API;

use App\Repository\ProductRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class ProductController extends Controller
{

    /**
     * @var UserRepository
     */
    private $productRepo;

    private $createProductValidationRules = [
        'name'=>'required',
        'description'=>'required',
        'price'=>'required',
        'category'=>'required'
        ];
    private $updateProductValidationRules = [
        'name'=>'required',
        'description'=>'required',
        'price'=>'required',
        'category'=>'required'
    ];

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepo = $productRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $users = $this->productRepo->getAll();
        return $this->sendResponse($users,"Products get Successfully");
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate($this->createProductValidationRules);
        $inputs = $request->only(['name','description','price','category']);
        $this->productRepo->store($inputs);
        return $this->sendSuccess("Product Created Successfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return $this->sendResponse($this->productRepo->find($id),"Product found successfully with Id ".$id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $request->validate($this->updateProductValidationRules);
        $inputs = $request->only(['name','description','price','category']);
        $this->productRepo->edit($inputs,$id);
        return $this->sendSuccess("Product updated successfully with Id ".$id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $this->productRepo->delete($id);
        return $this->sendSuccess("Product deleted successfully with Id ".$id);
    }
}
