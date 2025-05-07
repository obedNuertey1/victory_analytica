// src\app\components\LoadingComponent.tsx
"use client";
function LoadingComponent() {
    return (
        <div className='h-screen w-screen flex flex-col items-center justify-center'>
            <span className="loading text-gray-800 loading-spinner w-[calc(var(--size-selector,0.25rem)*15)]"></span>
        </div>
    )
}

export default LoadingComponent;