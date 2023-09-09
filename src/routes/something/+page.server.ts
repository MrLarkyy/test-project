import type { Action, Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load : PageServerLoad = async () => {
    //throw redirect(303,"/");
}

const register : Action = async({ request }) => {
    const penis = await request.formData();
    return {
        props : {
            size : penis.get("SMALL")
        }
    }
}

export const actions : Actions = {register}