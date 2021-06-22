<?php

namespace App\Http\Controllers\V1\API;

use App\Models\Store;
use App\Repository\StoreRepositoryInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class StoreController extends Controller
{
    private $createStoreRules = [
        'name'=>'required',
        'email'=>'required|email',
    ];

    private $updateStoreRules = [
        'name'=>'required',
        'email'=>'required|email',
    ];
    /**
     * @var StoreRepositoryInterface
     */
    private $storeRepo;

    public function __construct(StoreRepositoryInterface $storeRepository)
    {
        $this->storeRepo = $storeRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $inputs = $request->all();
        $stores = $this->storeRepo->getAll($inputs);
        return $this->sendResponse($stores,'All Stores Retrieved Successfully');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate($this->createStoreRules);
        $inputs = $request->only(['name','email']);
        $this->storeRepo->store($inputs);
        return $this->sendSuccess('Store Created Successfully');
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Store $store)
    {
        $storeId = $store->id;
        $request->validate($this->updateStoreRules);
        $inputs = $request->only(['name','email']);
        $this->productRepo->edit($inputs,$storeId);
        return $this->sendSuccess("Store updated successfully with Id ".$storeId);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Store  $store
     * @return \Illuminate\Http\Response
     */
    public function destroy(Store $store)
    {
        $storeId = $store->id;
        $this->storeRepo->delete($storeId);
        return $this->sendSuccess("Store deleted successfully with Id ".$storeId);
    }
}
