export const getData =async<T>(url:string):Promise<T>=>{  //generic function to return 
     
    const response = await fetch(url)
   return await response.json()

}