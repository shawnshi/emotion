import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Apple, Smile } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/overview');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 max-w-md mx-auto">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-24 h-24 bg-app-pink rounded-full flex items-center justify-center mb-6">
           <Smile className="w-12 h-12 text-app-dark" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Create Account</h1>
        <p className="text-app-text-muted text-center">Start your personalized journey with us.</p>
      </div>

      <form onSubmit={handleSignup} className="w-full space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-app-card/50 border border-transparent focus:border-app-pink rounded-xl p-4 text-app-text outline-none transition-colors"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-app-card/50 border border-transparent focus:border-app-pink rounded-xl p-4 text-app-text outline-none transition-colors"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full bg-app-card/50 border border-transparent focus:border-app-pink rounded-xl p-4 text-app-text outline-none transition-colors"
        />

        <button
          type="submit"
          className="w-full bg-app-pink hover:bg-app-pink-light text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-app-pink/30 mt-6"
        >
          Sign Up
        </button>
      </form>

      <div className="w-full flex items-center justify-between my-8">
        <div className="h-px bg-app-card w-full"></div>
        <span className="px-4 text-app-text-muted text-sm whitespace-nowrap">Or sign up with</span>
        <div className="h-px bg-app-card w-full"></div>
      </div>

      <div className="flex gap-4 w-full">
        <button className="flex-1 bg-app-card hover:bg-app-card/80 py-4 rounded-xl flex items-center justify-center transition-colors">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
          </svg>
        </button>
        <button className="flex-1 bg-app-card hover:bg-app-card/80 py-4 rounded-xl flex items-center justify-center transition-colors">
          <Apple className="w-6 h-6" />
        </button>
      </div>

      <p className="mt-8 text-xs text-center text-app-text-muted">
        By signing up, you agree to our <a href="#" className="text-white">Terms of Service</a> and <a href="#" className="text-white">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default Signup;
