import React from 'react'

export default function FormSearch() {
    const textKw = React.useRef()
    const btnSearch = React.useRef()
    const onChangeKw = () =>{
        if (textKw.current.value.trim() !== ''){
            btnSearch.current.disabled = false
        }else{
            btnSearch.current.disabled = true
        }
    }
  return (
    <form>
            <input type="text" name="kw" placeholder="ค้นหา" 
            ref={textKw} onInput={onChangeKw}/>
            <button ref={btnSearch} disabled>ค้นหา</button>
    </form>
  )
}
