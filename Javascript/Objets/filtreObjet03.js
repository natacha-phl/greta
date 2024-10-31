// High performing students

//You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.
// INPUT :
 const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];


  const newArrayStudent = students.map((student)=>{

    let somme = student.scores.reduce((acc,element)=>{
        return (acc + element) })

    return {name : student.name,
        average : somme / student.scores.length
        }
    })
    


  const studendsWithScoreAbove90 = newArrayStudent.filter((student)=>{
    return student.average >90
  })


    console.log(studendsWithScoreAbove90)



 //   return newArray.reduce((acc, current) => acc + current)

  // OUTPUT :
  // [ 
  //  { name: 'Jack', average: 100 }
  //]