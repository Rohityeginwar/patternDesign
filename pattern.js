let n=5;

/*for(let i=1 ; i<=n ; i++){
    let a= "";
    for(let j=1 ; j<=n; j++){
        a+="*"
    }
    console.log(a)
}*/

// for(let i=1; i<=n ; i++){
//     let a=""
//     for(let j=1; j<=i;j++){
//         a+="*"
//     }
//     console.log(a)
// }


// for(let i=1; i<=n ; i--){
//     let a=""
//     for(let j=1; j<=n;j--){
//         a+="*"
//     }
//     console.log(a)
// }


//opposite triangle
for(let i = 1;i<=n ; i++){
    let a = "";
    for (let j=1; j<=n-i+1 ; j++){
        a+="*"
    }
    console.log(a)
}

for(let i = 1 ; i<=n ; i++){
    let a = " "
    for (let j=1 ; j<=n-1 ; j++){
        a+=" "
    }
    for(let k=1 ; k<=2*n-i; k++){
        a+="*"
    }
    console.log(a)
}

for(let i=1 ; i<=n ; i++){
    let a = " "
    for (let j=1  ; j<=n-i ; j++){
        a+=" "
    }
    for(let k=1 ; k<=i ; k++){
        a+="*"
    }
    console.log(a)
}


for(let i = n-1;i<=1;i-- ){
    let a =" "
    for (let j=n-i;j<=i ; j--){
        a+=" "
    }
    for(let k=1;k<=2*i-1;k++){
        a+="8"
    }
    console.log(a)
}



