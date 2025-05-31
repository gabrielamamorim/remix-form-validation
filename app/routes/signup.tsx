import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

type ActionErrors = {
    errors?: {
        email?: string;
        password?: string;
    };
};

export default function Signup() {
    const actionData = useActionData<ActionErrors>();

    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4 text-gray-800">
            <div className="bg-white shadow-md rounded-md p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-6 text-center">Cadastro</h1>
                <Form method="post" className="flex flex-col items-center gap-4">
                    <p className="w-full">
                        <input type="email" name="email" placeholder="Email" className="w-full pl-3 pr-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-200" />
                        {actionData?.errors?.email ? (
                            <em className="block mt-1 text-sm text-red-600">{actionData?.errors.email}</em>
                        ) : null}
                    </p>

                    <p className="w-full">
                        <input type="password" name="password" placeholder="Senha" className="w-full pl-3 pr-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-slate-200" />
                        {actionData?.errors?.password ? (
                            <em className="block mt-1 text-sm text-red-600">{actionData?.errors.password}</em>
                        ) : null}
                    </p>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md mt-2 transition-colors">Cadastre-se</button>
                </Form>
            </div>
        </main>
    );
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    const errors: ActionErrors["errors"] = {};

    if (!email.includes("@")) {
        errors.email = "Endereço de email inválido";
    }

    if (password.length < 12) {
        errors.password = "A senha deve ter pelo menos 12 caracteres";
    }

    if (Object.keys(errors).length > 0) {
        return json({ errors });
    }

    return redirect("/welcome");
}