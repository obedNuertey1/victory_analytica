// app/components/Splash.tsx
'use client'
// import "./Splash.css";

export default function Splash() {

    return (
        <>
            <style jsx global>{`
        .v-text {
            color: var(--color-blue-500);
            animation: v-text-animation 2s linear infinite;
        }
        .a-text {
            animation: a-text-animation 2s linear infinite;
        }
        .icon-container {
            animation: icon-container 2s linear infinite;
        }
        .top-company-name {
            animation: top-company-name 2s linear infinite;
        }
        .bottom-company-name {
            animation: bottom-company-name 2s linear infinite;
        }

        @keyframes bottom-company-name {
            0%   { transform: translateY(100px); }
            50%  { transform: translateY(0); }
            90%  { transform: translateY(0); }
            100% { transform: translateY(0) translateX(-100px); }
        }
        @keyframes top-company-name {
            0%   { transform: translateY(-100px); }
            50%  { transform: translateY(0); }
            90%  { transform: translateY(0); }
            100% { transform: translateY(0) translateX(-100px); }
        }
        @keyframes icon-container {
            0%   { transform: scale(1);   opacity: 1; }
            90%  { transform: scale(1);   opacity: 1; }
            100% { transform: scale(1.1); opacity: 0; }
        }
        @keyframes a-text-animation {
            0%   { transform: translateX(50px); }
            10%  { transform: translateX(-2.1px); }
            90%  { transform: translateX(-2.1px); }
            100% { transform: translateY(50px); }
        }
        @keyframes v-text-animation {
            0%   { color: white; transform: translateX(-50px); }
            10%  { color: white; transform: translateX(-3px); }
            15%  { color: white; transform: translateX(3px); }
            30%  { color: white; transform: translateX(2.1px); }
            50%  { color: var(--color-blue-500); transform: translateX(2.1px); }
            90%  { color: var(--color-blue-500); transform: translateX(2.1px); }
            100% { color: var(--color-blue-500); transform: translateY(-50px); }
        }
      `}</style>
            <div className='h-screen w-screen flex flex-col items-center justify-center'>
                <div className="flex items-center gap-1.5">
                    <div className="icon-container w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center overflow-clip">
                        <span className="text-white font-bold text-2xl text-center inline-block transform translate-x-[2px] m-auto">
                            <span className='v-text inline-block transform translate-x-[2.35px] -scale-x-150 z-10' >V</span>
                            <span className="a-text inline-block transform  -translate-x-[2.35px] scale-x-140 z-20">A</span>
                        </span>
                    </div>
                    <span className="overflow-clip">
                        <span className="block text-2xl font-bold top-company-name">Victory Analytica</span>
                        <span className='block -mt-2 text-2xl tracking-[3px] bottom-company-name'>& Security LLC</span>
                    </span>
                </div>
            </div>
        </>
    )
};