export const GameModalFooter = ({ onClose }: { onClose: () => void }) => (
  <div className="flex justify-end mt-4">
    <button
      onClick={onClose}
      className="w-full bg-zinc-800 hover:bg-zinc-700 py-2 rounded text-sm"
    >
      Close
    </button>
  </div>
);
