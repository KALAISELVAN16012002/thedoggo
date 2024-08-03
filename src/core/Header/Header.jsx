export default function Header() {

    return (

        <header className='shadow-md py-4 px-4 sm:px-10 bg-white   min-h-[70px] tracking-wide relative z-50'>
            <div className="max-w-[85rem] mx-auto">
            <div className='items-center justify-between gap-5 lg:flex'>
                <h1 className="text-5xl font-bold text-green-500 font-SuperUse">...The Dog</h1>
                <a href="javascript:void(0)"><img src="/images/dog-food.png" alt="logo"
                    className='w-40 max-lg:mr-5' />
                </a>
                <h1 className="text-5xl font-bold text-blue-500 font-SuperUse">Showcase...</h1>
            </div>

            </div>
          
        </header>
    )
}