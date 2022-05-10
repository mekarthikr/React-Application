export default function onRendercallback(id,phase,actualDuration,baseDuration,startTime,commitTime)
{
    console.log(id+phase+actualDuration+baseDuration+startTime+commitTime)
}
//Profiler