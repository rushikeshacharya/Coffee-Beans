var SupplyChain = artifacts.require("SupplyChain");

contract("SupplyChain", function (accounts) {
  let instance;
  let owner = accounts[0];
  let newOwner = accounts[1];
  let zeroAddress = '0x0000000000000000000000000000000000000000';

  describe("SupplyChain Test Suit", () => {
    it("should test the curent owner of the contract", async () => {
      const instance = await SupplyChain.deployed();

      assert.equal(
        await instance.owner.call(),
        owner,
        "Given address is not the owner of this contract"
      );
      assert.equal(
        await instance.isOwner.call({ from: owner }),
        true,
        "Given address is not the owner of this contract"
      );
    });
    it("should transfer the ownership of contract to the new owner", async () => {
      const instance = await SupplyChain.deployed();

      let res = await instance.transferOwnership(newOwner, { from: owner });
      assert.equal(res.receipt.status, true, "Transfer Ownership Failed");
      assert.equal(
        await instance.isOwner.call({ from: newOwner }),
        true,
        "Transfer Ownership Failed"
      );
      assert.equal(
        await instance.isOwner.call({ from: owner }),
        false,
        "Transfer Ownership failed"
      );
    });
    it("should renounce the ownership of the contract", async () => {
      const instance = await SupplyChain.deployed();
      assert.equal(
        await instance.owner.call(),
        newOwner,
        "Given address is not the owner of this contract"
      );
      let res = await instance.renounceOwnership({ from: newOwner });
      assert.equal(res.receipt.status, true, "Renounce Ownership Failed");
      assert.equal(await instance.owner.call(), zeroAddress, "Renounce Ownership Failed");

    });
  });
});
