export default function Message({count}){
    let message = "Start clicking to see your progress";
    if(count > 5 && count <=10){
        message = "Good job! You're getting the hang of it.";
    } else if(count > 10 && count <=20){
        message = "Great work! You're on a roll.";
    } else if(count > 20){
        message = "Amazing! You're a clicking pro!";
    }
    return(
        <p>{message}</p>
    )
}