<template >
    <div class="w-3xl h-[450px] flex flex-col justify-center items-center space-y-2">
        <div id="content">
            <textarea name="content" id="text-content" cols="80" rows="100" class="border-2 border-gray-400 rounded-md h-72
             bg-gray-50 p-3 outline-0 text-justify font-iransans text-blue-600" v-model="content"></textarea>
        </div>
        <div id="timer-details" class="w-full h-full flex justify-center items-center px-3 space-x-3  ">
            <div class="flex justify-center items-center bg-blue-200 p-2 rounded-md space-x-2">
                <span class="text-blue-700 font-iransans">زمان مطالعه : </span>
                <span class=" text-blue-600 font-iransans">{{ studyTimer }} دقیقه</span>
            </div>
            <div class="flex justify-center items-center bg-blue-200 p-2 rounded-md space-x-2">
                <span class="text-blue-700 font-iransans">تعداد کلمات : </span>
                <span class=" text-blue-600 font-iransans">{{ calcStr }} کلمه</span>
            </div>
            <button type="button" class="bg-red-200 text-red-700 font-iransans rounded-md p-2 
             cursor-pointer" @click="deleteContent()"> حذف محتوا</button>
        </div>
    </div>
</template>
<script>
import timerPlugin from '../plugins/timerPlugin'
export default {
    setup() {
        const { studyTimer, content , calcStr , deleteContent } =  timerPlugin()
        
        return {
            studyTimer,
            content ,
            calcStr , 
            deleteContent
            
        }
    }
}
</script>
