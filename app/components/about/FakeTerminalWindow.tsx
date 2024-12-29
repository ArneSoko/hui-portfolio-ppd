import { ReactNode } from 'react'

const FakeTerminalWindow = ({ section, children }: { section: string ,children: ReactNode }) => {
    return (
        <div className="w-5/6 mx-auto md:w-full rounded-xl shadow-lg text-lg border border-black/20">
            {/* top bar */}
            <div className="flex bg-base-200 py-2 px-4 rounded-t-xl gap-2">
                <div className="bg-error h-4 w-4 rounded-full" />
                <div className="bg-warning h-4 w-4 rounded-full" />
                <div className="bg-success h-4 w-4 rounded-full" />
                <div className='mx-auto w-1/2 text-center'>
                    <p className='text-violet-400 -mb-2 -mt-1 font-semibold'>{section}</p>
                </div>
            </div>
            {/* bottom content */}
            <div className="bg-base-300 p-6 rounded-b-xl">
                <div className="space-y-4 space">{children}</div>
            </div>
        </div>
    )
}

export default FakeTerminalWindow