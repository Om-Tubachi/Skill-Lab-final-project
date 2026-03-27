import {useState} from 'react'

const backend = import.meta.env.VITE_BACKEND_URL

// const backend = 'http://localhost:3000'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(`${backend}/signup`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email}),
            })

            if (res.status === 202) setError('Already registered')
            if (res.status === 200) {
                setSuccess(true)
            }
            else setSuccess(false)

        } catch {
            setError('Unable to connect. Try again.')
        } finally {
            setLoading(false)
        }
        setEmail('')
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-transparent p-8 rounded-xl shadow-sm w-fit ">
                <h1 className="text-md text-gray-800 mb-6">Sign up - to receive weekly React news</h1>

                {success ? (
                    <p className="text-green-600 text-md">I hope you received an email</p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-20 pt-10">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                            className="w-full text-black bg-white/10 backdrop-blur-lg border border-white/2 p-4 rounded-lg shadow-2xl text-sm outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                        />
                        {error && <p className="text-red-500 text-md">An embarassing error</p>}
                        <button
                            type="submit"
                            disabled={loading || !email}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
                        >
                            {loading ? 'Signing up... + Prepping report + emailing it to you' : 'Sign up'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Signup