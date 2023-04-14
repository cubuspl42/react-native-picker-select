export function schedule(callback, timeout) {
    const handle = setTimeout(callback, timeout);
    return () => clearTimeout(handle);
}
