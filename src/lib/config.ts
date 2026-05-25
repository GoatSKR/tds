// Central business config. Replace placeholder values with real ones.
export const config = {
  brand: "Trushna Disinfection Services",
  phone: "+917381214444",
  phoneDisplay: "+91 73812 14444",
  whatsapp: "917381214444", // digits only, no +
  whatsappMessage: "Hi TDS, I'd like to know more about your pest control / disinfection services.",
  email: "trushnaventures@gmail.com",
  address: {
    line1: "Office address line 1 (share with us)",
    line2: "Berhampur, Ganjam, Odisha 760001",
  },
  // Paste a Google Maps embed URL here (Share → Embed a map → copy `src`)
  mapEmbedUrl: "https://www.google.com/maps?q=Berhampur,+Odisha&output=embed",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    justdial: "https://share.google/JFlWy7SZeeertKVns",
    google: "https://share.google/JFlWy7SZeeertKVns",
  },
  // FormSubmit (free, no setup — first submission triggers email-confirm at the inbox above)
  formsubmitEndpoint: "https://formsubmit.co/ajax/trushnaventures@gmail.com",
  // Google Form — paste your form's formResponse URL + the entry IDs for each field
  googleForm: {
    formResponseUrl: "", // e.g. https://docs.google.com/forms/d/e/XXX/formResponse
    fields: {
      name: "entry.111111111",
      email: "entry.222222222",
      phone: "entry.333333333",
      services: "entry.444444444",
      otherService: "entry.555555555",
      message: "entry.666666666",
      address: "entry.777777777",
      city: "entry.888888888",
      date: "entry.999999999",
      area: "entry.101010101",
      source: "entry.121212121",
    },
  },
};

export const submitToBackends = async (
  payload: Record<string, string>,
  source: "contact" | "quote",
) => {
  const tasks: Promise<unknown>[] = [];

  // 1) FormSubmit (email)
  tasks.push(
    fetch(config.formsubmitEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...payload, _source: source, _subject: `New ${source} from ${payload.name || payload.email || "visitor"}` }),
    }).catch(() => undefined),
  );

  // 2) Google Form (spreadsheet) — fire-and-forget, no-cors
  if (config.googleForm.formResponseUrl) {
    const body = new URLSearchParams();
    const map = config.googleForm.fields;
    Object.entries(payload).forEach(([k, v]) => {
      const entry = (map as Record<string, string>)[k];
      if (entry) body.append(entry, v);
    });
    if ((map as Record<string, string>).source) body.append(map.source, source);
    tasks.push(
      fetch(config.googleForm.formResponseUrl, { method: "POST", mode: "no-cors", body }).catch(() => undefined),
    );
  }

  await Promise.allSettled(tasks);
};