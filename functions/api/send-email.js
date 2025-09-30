
export const onRequestPost = async ({ request, env }) => {
  try{
    const { name, email, phone, details } = await request.json();
    const to = env.TO_EMAIL || 'webtoronto24@gmail.com';
    const from = env.MAIL_FROM || 'no-reply@yourdomain.com';
    const payload = {
      personalizations: [{ to: [{ email: to }] }],
      from: { email: from, name: 'Wallpaper Removal Pro' },
      subject: 'New Quote Request',
      content: [{ type: 'text/plain', value: `Name: ${name||''}\nEmail: ${email||''}\nPhone: ${phone||''}\n\nDetails:\n${details||''}` }]
    };
    const resp = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    });
    if(!resp.ok){ return new Response('Mail error', { status: 500 }); }
    return new Response('OK', { status: 200 });
  }catch{
    return new Response('Bad request', { status: 400 });
  }
};
