let obj1={

    job:{
        workexperence:{
            salary:40000
        }
    }
}

// console.log(obj1.job.workexperence.salary ? obj1.job.workexperence.salary.yearly : undefined)

// console.log(obj1.job.workexperence.salary && obj1.job.workexperence.salary.yearly)

console.log(obj1.job?.workexperence?.salary)


