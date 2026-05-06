export type UserRole = 'visitor' | 'demo-user' | 'demo-admin' | 'real-admin';

export const saveContent = (data: any, role: UserRole) => {
	if (role === 'real-admin') {
		console.log("Saving to Database...", data);
		// fetch('/api/save', { method: 'POST', body: JSON.stringify(data) });
	} else if (role === 'demo-admin') {
		console.log("Saving to Session Storage...");
		sessionStorage.setItem('portfolio_demo_changes', JSON.stringify(data));
	}
};