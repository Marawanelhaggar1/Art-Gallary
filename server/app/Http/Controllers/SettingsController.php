<?php

namespace App\Http\Controllers;

use App\Http\Requests\settings\CreateSettingRequests;
use App\Http\Requests\settings\UpdateSettingRequests;
use App\Http\Resources\SettingResources;
use App\Models\Settings;
class SettingsController extends Controller
{
    public function index(){

     return SettingResources::collection(Settings::all());
 }

    public function create(CreateSettingRequests $request){
        $settings = $request->createSetting();
        return new SettingResources($settings);
    }

    public function update(UpdateSettingRequests $request){
        $settings = $request->updateSettings();
        return new SettingResources($settings);

    }

    public function delete($id)
    {
        $setting=Settings::findOrFail($id);
        $setting->delete();

        return response()->json([
            'message' => 'settings deleted successfully'
        ]);
    }

}
