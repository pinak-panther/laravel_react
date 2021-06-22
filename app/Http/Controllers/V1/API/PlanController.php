<?php

namespace App\Http\Controllers\V1\API;

use App\Models\Plan;
use App\Repository\PlanRepositoryInterface;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class PlanController extends Controller
{

    private $createPlanRules = [
      'name'=>'required',
      'price'=>'required',
      'duration'=>'required'
    ];

    private $updatePlanRules = [
        'name'=>'required',
        'price'=>'required',
        'duration'=>'required'
    ];

    /**
     * @var PlanRepositoryInterface
     */
    private $planRepo;

    public function __construct(PlanRepositoryInterface $planRepository)
    {
        $this->planRepo = $planRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @param $createPlanRules
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request )
    {
        $inputs = $request->all();
        $plans = $this->planRepo->getAll($inputs);
        return $this->sendResponse($plans,'All Plans Retrieved Successfully');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate($this->createPlanRules);
        $inputs = $request->only(['name','price','duration']);
        $this->planRepo->store($inputs);
        return $this->sendSuccess('Plan Created Successfully');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Plan  $plan
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Plan $plan)
    {
        $planId = $plan->id;
        $request->validate($this->updatePlanRules);
        $inputs = $request->only(['name','description','price']);
        $this->productRepo->edit($inputs,$planId);
        return $this->sendSuccess("Plan updated successfully with Id ".$planId);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Plan  $plan
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Plan $plan)
    {
        $planId = $plan->id;
        $this->planRepo->delete($planId);
        return $this->sendSuccess("Plan deleted successfully with Id ".$planId);
    }
}
