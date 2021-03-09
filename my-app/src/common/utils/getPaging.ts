export function getPaging(total: number, limit:number, cur: number): {start: number, end: number, totalPage: number} {
  
    const totalPage = Math.ceil(total / limit);
    const start =  Math.max(...Array(totalPage).fill(1).map((_,idx) => idx + 1).filter(el => el % 5 === 1 && cur >= el))
    const end = start + 4 > totalPage ? totalPage : start + 4;
    return {start, end, totalPage}
  
}