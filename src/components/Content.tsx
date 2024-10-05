import { BsJournalText } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import { FiCheck } from 'react-icons/fi'
import React, { useState } from 'react'

export default function Content(){

    const [tarefas, setTarefas] = useState([])

    React.useEffect(() => {            
        const dates = JSON.parse(localStorage.getItem('storage')!) || {}
        if(dates[0] !== undefined) setTarefas(dates);

    }, [])



    return(
        <div className='flex items-center justify-center flex-col mt-20'>
            <div className='flex items-center justify-between w-[37rem] text-sm text-bluey'>
                <p>Tarefas criadas <span className='-bg--gray-400 text-white rounded-[45px] text-[12px] px-[10px] py-[5px]'> 5 </span></p>
                <p className='text-purpleDark'>Concluidas <span className='-bg--gray-400 rounded-[45px] text-white text-[12px] px-[10px] py-[5px]'> 2 de 5 </span></p>
            </div>

            {tarefas[0] === undefined ? 
            
                <div className='flex items-center justify-center w-[37rem] py-12 border-t-[1px] -border--gray-400 mt-5'>
                    <div className='flex items-center flex-col'>
                    <div><BsJournalText className=' -text--gray-300 mb-4' size={60}/></div>
                    <div>
                            <p className='text-sm -text--gray-300'>Você ainda não tem tarefas cadastradas</p>
                            <p className='text-sm -text--gray-400 font-bold'>Crie tarefas e organize seus itens a fazer</p>
                        </div> 
                    </div>
                </div> 
                
                :

                <div className='flex items-center justify-center flex-col mt-9 gap-4'>
                    {
                        tarefas?.map((i:any , index)=>(
                            <div key={index} className='flex justify-between w-[37rem] rounded-[7px] p-5 -bg--gray-500 gap-4'>
                                <div className='py-[7px] absolute px-[7px] hover:bg-bluey hover:bg-opacity-15 border-bluey border-[2px] rounded-[100%]'></div>
                                <p className=' ml-10 pr-4 max-w-[31rem] text-sm -text--gray-200'>{i.then}</p>
                                <BiTrash className='-text--gray-300 absolute ml-[33rem] hover:text-danger' size={18}/>
                            </div>
                        ))
                    }

                     <div className='flex items-center justify-center rounded-[7px] p-5 -bg--gray-500 gap-4'>
                        <div className='py-[5px] px-[5px] bg-purpleDark hover:bg-purple rounded-[100%]'><FiCheck className='text-white' size={10}/></div>
                        <p className='max-w-[31rem] text-sm -text--gray-300 line-through'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis amet consectetur adipisicing da delectus aliquid.</p>
                        <BiTrash className='-text--gray-300 hover:text-danger' size={18}/>
                    </div>
                </div>

            }
            
        </div>
    )
}